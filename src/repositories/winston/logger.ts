import { format, transports, createLogger, config } from 'winston';

// const logNoticeFormat = format.printf(
//   (event) =>
//     `${event.metadata.timestamp} ${event.level} [${event.message.target}]: ${event.message.query}`
// );

export const logger = createLogger({
  levels: config.syslog.levels,
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: 'default' }),
    format.metadata()
  ),
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.json())
    }),
    new transports.File({
      filename: 'logs/combined.log',
      format: format.combine(
        // Render in one line in your log file.
        // If you use prettyPrint() here it will be really
        // difficult to exploit your logs files afterwards.
        format.json()
      )
    })
  ]
});
