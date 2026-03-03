import { NS } from '@ns';

const SCRIPTS_FOLDER = '/payload';

const HACK = SCRIPTS_FOLDER + '/hack.js';
const GROW = SCRIPTS_FOLDER + '/grow.js';
const WEAKEN = SCRIPTS_FOLDER + '/weaken.js';

export async function main(ns: NS) {
  const noodles = 'n00dles';
  const foodnstuff = 'foodnstuff';

  const nodes = ns.getPurchasedServers();

  ns.tprint('nodes', nodes);

  ns.tprint(ns.ls('home', 'server-payload'));

  ns.tprint(ns.ls(nodes[0], SCRIPTS_FOLDER));


  ns.killall(nodes[0])
  ns.ls(nodes[0], SCRIPTS_FOLDER).forEach((item) => ns.rm(item, nodes[0]));

  ns.scp(ns.ls('home', SCRIPTS_FOLDER), nodes[0]);

  // ns.killall(noodles)
  // ns.scp('hack-4gb.js', noodles);
  // ns.exec('hack-4gb.js', noodles, 1, noodles)

  // ns.rm('hack.js', noodles)
  // ns.rm('grow.js', noodles)
  // ns.rm('weaken.js', noodles)

  // ns.scp(['hack.js', 'grow.js', 'weaken.js'], foodnstuff)

  // ns.killall(foodnstuff);
  // ns.scp([SERVER_PAYLOAD_PATH, HACK_SCRIPT].join('/'), foodnstuff);
  // ns.exec(HACK_SCRIPT, foodnstuff, 6, foodnstuff);

  ns.exec(WEAKEN, nodes[0], 2, foodnstuff);
  ns.exec(GROW, nodes[0], 6, foodnstuff);

  // ns.killall(nodes[1]);
  // ns.scp(['grow.js', 'weaken.js'], nodes[1]);
  // ns.exec('weaken.js', nodes[1], 2, foodnstuff);
  // ns.exec('grow.js', nodes[1], 6, foodnstuff);

  // ns.killall(nodes[3]);
  // ns.scp(['grow.js', 'weaken.js'], nodes[3]);
  // ns.exec('grow.js', nodes[3], 8, foodnstuff);

  ns.tprint('started!');
}
