import { NS } from "@ns"

/**
 * Buy ram for an hostname
 * 
 * @example [home /]> run buy-ram.js node-1 16
 * @param ns
 */
export async function main(ns: NS) {
  const ram = Number(ns.args[1])
  const hostname = String(ns.args[0])

  ns.upgradePurchasedServer(hostname, ram)

  ns.tprint(`Upgraded ram for ${hostname} to ${ns.formatRam(ram)}`)
}
