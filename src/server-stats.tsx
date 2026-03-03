import { NS } from '@ns';
import { ServersTable } from './components/ServersTable';
import { Button } from './components/Button';
import { GROW } from './constants';

export async function main(ns: NS) {
  const res = await fetch('https://dogapi.dog/api/v2/facts?limit=1')
  ns.tprint(await res.json())

  ns.ui.openTail();

  ns.print(ns.getPurchasedServers());
  // ns.print(ns.getServer(ns.getPurchasedServers()[0]))

  while (true) {
    ns.printRaw(<h3>{new Date().toLocaleString()}</h3>);

    const purchasedServers = ns
      .getPurchasedServers()
      .map((s) => ns.getServer(s))
      .map((s) => ({
        ...s,
        serverSecurityLevel: ns.getServerSecurityLevel(s.hostname),
        serverMinSecurityLevel: ns.getServerMinSecurityLevel(s.hostname),
      }));

    // ns.print(JSON.stringify(purchasedServers, null, 2));

    const servers = [ns.getServer('n00dles'), ns.getServer('foodnstuff')].map((s) => ({
      ...s,
      serverSecurityLevel: ns.getServerSecurityLevel(s.hostname),
      serverMinSecurityLevel: ns.getServerMinSecurityLevel(s.hostname),
    }));

    // ns.print(JSON.stringify(servers, null, 2));

    ns.getRunningScript(GROW, 'node-1');

    ns.printRaw(<Button onClick={() => ns.run('start.js')}>START</Button>);

    ns.printRaw(<h1>Servers</h1>);
    ns.printRaw(<ServersTable servers={purchasedServers} ns={ns} />);

    ns.printRaw(<h1>Hosts</h1>);
    ns.printRaw(<ServersTable servers={servers} ns={ns} />);

    // ns.printRaw(<h3>getGrowTime: {ns.getGrowTime(servers[0].hostname)}</h3>);
    // ns.printRaw(<h3>getServerGrowth {ns.getServerGrowth(servers[0].hostname)}</h3>);

    await ns.asleep(1000);
    ns.clearLog();
  }
}
