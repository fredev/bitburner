import { NS } from '@ns';

export async function main(ns: NS) {
  while (true) {
    await ns.weaken(String(ns.args[0]));
  }
}
