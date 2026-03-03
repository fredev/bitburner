import { NS } from "@ns"

/**
 * Buy a new server
 * @example [home /]> run purchase-server.js node-1 16
 * @param ns
 */
export async function main(ns: NS) {
  const hostname = String(ns.args[0])
  const ram = Number(ns.args[1])

  ns.purchaseServer(hostname, ram)

  ns.tprint(`Puchased server ${hostname} with ${ns.formatRam(ram)}`)
}
