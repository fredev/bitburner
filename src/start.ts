import { NS } from '@ns';
import { GROW, HACK, SCRIPTS_FOLDER, WEAKEN } from './constants';

export async function main(ns: NS) {
  const noodles = 'n00dles';
  // const foodnstuff = 'foodnstuff';

  const nodes = ns.getPurchasedServers();

  ns.tprint('nodes', nodes);

  ns.tprint(ns.ls('home', 'server-payload'));

  ns.tprint(ns.ls(nodes[0], SCRIPTS_FOLDER));

  // ns.killall(noodles)
  // ns.scp('hack-4gb.js', noodles);
  // ns.exec('hack-4gb.js', noodles, 1, noodles)

  // ns.rm('hack.js', noodles)
  // ns.rm('grow.js', noodles)
  // ns.rm('weaken.js', noodles)

  // ns.scp(['hack.js', 'grow.js', 'weaken.js'], foodnstuff)

  ns.killall(noodles);
  ns.scp(HACK, noodles);
  ns.exec(HACK, noodles, 2, noodles);

  nodes.forEach((n) => {
    ns.killall(n);
  });

  [nodes[0]].map((n) => {
    ns.ls(n, SCRIPTS_FOLDER).forEach((item) => ns.rm(item, n));
    ns.scp(ns.ls('home', SCRIPTS_FOLDER), n);
    ns.exec(WEAKEN, n, 2, noodles);
    ns.exec(GROW, n, 8, noodles);
    ns.exec(HACK, n, 8, noodles);
  });

  // ns.killall(nodes[1]);
  // ns.scp(['grow.js', 'weaken.js'], nodes[1]);
  // ns.exec('weaken.js', nodes[1], 2, foodnstuff);
  // ns.exec('grow.js', nodes[1], 6, foodnstuff);

  // ns.killall(nodes[3]);
  // ns.scp(['grow.js', 'weaken.js'], nodes[3]);
  // ns.exec('grow.js', nodes[3], 8, foodnstuff);

  ns.tprint('started!');
}
