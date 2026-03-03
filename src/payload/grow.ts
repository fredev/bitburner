import { NS } from '@ns';

export async function main(ns: NS) {
  while (true) {
    await ns.grow(String(ns.args[0]));
  }
}
