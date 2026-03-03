import { NS, Server } from '@ns';

interface ServerExtended extends Server {
  serverSecurityLevel: number;
  serverMinSecurityLevel: number;
}

interface ServersTableProps {
  servers: ServerExtended[];
  ns: NS;
}

const styles = {
  cell: {
    padding: '8px',
    border: '1px solid green',
  },
  head: {
    padding: '8px',
    border: '1px dashed green',
  },
};

const TableCell = (props: React.ComponentPropsWithoutRef<'td'>) => <td {...props} style={{ ...props.style, ...styles.cell }} />;

export function ServersTable({ servers, ns }: ServersTableProps) {
  const headers = [
    'Hosts',
    'RamUsed',
    'MaxRam',
    'MoneyAvailable',
    'MoneyMax',
    'ServerSecurityLevel',
    'ServerMinSecurityLevel',
  ];

  return (
    <table>
      <tr>
        {headers.map((header) => (
          <th style={styles.head}>{header}</th>
        ))}
      </tr>

      {servers.map((server) => (
        <tr>
          <TableCell>{server.hostname}</TableCell>
          <TableCell>{server.ramUsed}</TableCell>
          <TableCell>{server.maxRam}</TableCell>
          <TableCell style={{ background: 'purple'}}>
            {server?.moneyAvailable && server?.moneyMax && (
              <span>
                <p>
                  {ns.formatNumber(server?.moneyAvailable ?? 0)} / {ns.formatNumber(server?.moneyMax ?? 0)}
                </p>
                <p style={{ textAlign: 'center' }}>{ns.formatPercent(server.moneyAvailable / server.moneyMax)}</p>
              </span>
            )}

            {server?.moneyAvailable && server?.moneyMax && (<span style={{ position: 'relative', width: '100%', height: 10, background: 'red' }} />)}
          </TableCell>
          <TableCell>{ns.formatNumber(server?.moneyMax ?? 0)}</TableCell>
          <TableCell>{server.serverSecurityLevel}</TableCell>
          <TableCell>{server.serverMinSecurityLevel}</TableCell>
        </tr>
      ))}
    </table>
  );
}
