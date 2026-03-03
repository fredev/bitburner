import { NS } from "@ns"

export async function main(ns: NS) {
  const hostname = String(ns.args[0])
  const ram = Number(ns.args[1])

  ns.tprint(ns.formatNumber(ns.getPurchasedServerUpgradeCost(hostname, ram)))
}
