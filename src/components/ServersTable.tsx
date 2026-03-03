import { NS, Server } from "@ns"

interface ServerExtended extends Server {
  serverSecurityLevel: number
  serverMinSecurityLevel: number
}

interface ServersTableProps {
  servers: ServerExtended[]
  ns: NS
}

const styles = {
  cell: {
    padding: '8px',
    border: '1px solid green',
  }
}

export function ServersTable({ servers, ns }: ServersTableProps) {
  return (
    <table>
      <tr>
        <th style={styles.cell}>Host</th>
        <th style={styles.cell}>MoneyAvailable</th>
        <th style={styles.cell}>MoneyMax</th>
        <th style={styles.cell}>ServerSecurityLevel</th>
        <th style={styles.cell}>ServerMinSecurityLevel</th>
      </tr>

      {servers.map(server => (
        <tr>
          <td style={styles.cell}>{server.hostname}</td>
          <td style={styles.cell}>{ns.formatNumber(server?.moneyAvailable ?? 0)}</td>
          <td style={styles.cell}>{ns.formatNumber(server?.moneyMax ?? 0)}</td>
          <td style={styles.cell}>{server.serverSecurityLevel}</td>
          <td style={styles.cell}>{server.serverMinSecurityLevel}</td>
        </tr>
      ))}
    </table>
  );
}
