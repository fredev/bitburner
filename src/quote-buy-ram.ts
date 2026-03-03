import { NS } from "@ns"

export async function main(ns: NS) {
  ns.ui.openTail()

  const hostname = String(ns.args[0])
  const ram = Number(ns.args[1])

  ns.print(ns.formatNumber(ns.getPurchasedServerUpgradeCost(hostname, ram)))
}
