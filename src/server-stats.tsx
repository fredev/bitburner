// @ts-nocheck
import { NS } from '@ns';
import { ServersTable } from './components/ServersTable';

export async function main(ns: NS) {
  ns.ui.openTail();

  ns.print(ns.getPurchasedServers());

  while (true) {
    const servers = [ns.getServer('n00dles'), ns.getServer('foodnstuff')].map((s) => ({
      ...s,
      serverSecurityLevel: ns.getServerSecurityLevel(s.hostname),
    }));

    ns.printRaw(<ServersTable servers={servers} ns={ns} />);
    await ns.asleep(10000);

    ns.clearLog();
  }
}
