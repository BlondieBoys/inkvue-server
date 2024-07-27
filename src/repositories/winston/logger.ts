import winston from "winston";

export const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  defaultMeta: { service: "user-service" },
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});
