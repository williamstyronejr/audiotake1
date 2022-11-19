import http from "http";
import app from "./services/app";

interface ServerAsync extends http.Server {
  closeAsync?: () => Promise<any>;
}

/**
 * Set the exit handler for server shut down.
 * @param server Http server instance
 */
function gracefulShutdown(server: ServerAsync): void {
  async function exitHandler(options: { exit?: boolean } = {}) {
    if (server.closeAsync) {
      try {
        await server.closeAsync();
        console.log("Server graceful shut down");
      } catch (err: any) {
        console.log(`Error on shutdown, ${err}`);
      }
    }

    if (options.exit) process.exit();
  }

  process.on("exit", exitHandler);

  // catches ctrl+c event
  process.on("SIGINT", exitHandler.bind(null, { exit: true }));

  // catches "kill pid" (for example: nodemon restart)
  process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
  process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));

  // catches uncaught exceptions
  process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
}

/**
 * Sets up  all services (database, redis) and then starts up the server.
 * @param IP Ip/Hostname for server
 * @param PORT Port for server
 * @returns Returns the server instance
 */
export default async function startServer(
  IP: string,
  PORT: number
): Promise<ServerAsync> {
  const httpServer: ServerAsync = http.createServer(app);

  await new Promise<void>((res) => {
    httpServer.listen({ port: PORT, ip: IP }, res);
  });

  const originalClose = httpServer.close.bind(httpServer);

  httpServer.closeAsync = () =>
    new Promise((res) => {
      // Clean up services then call to original close
      originalClose(res);
    });

  gracefulShutdown(httpServer);

  console.log(`Server started at ${IP}:${PORT}`);
  return httpServer;
}
