import { NS } from '@ns';

export async function main(ns: NS) {
  while (true) {
    await ns.hack(String(ns.args[0]));
  }
}
