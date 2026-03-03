import { NS } from "@ns";

/**
 * This the starter scripts with some logs added on my first gameplay
 * @deprecated
 * @param ns 
 */
export async function main(ns: NS) {
  // Defines the "target server", which is the server
  // that we're going to hack. In this case, it's "n00dles"
  const target = String(ns.args[0]);
  const hackThreads = Number(ns.args[1]);

  // Defines how much money a server should have before we hack it
  // In this case, it is set to the maximum amount of money.
  const moneyThresh = ns.getServerMaxMoney(target);
  const serverMinSecurityLevel = ns.getServerMinSecurityLevel(target);

  // Get root access to target server
  ns.nuke(target);

  // Infinite loop that continously hacks/grows/weakens the target server
  while (true) {
    const serverMoneyAvailable = ns.getServerMoneyAvailable(target);
    const serverSecurityLevel = ns.getServerSecurityLevel(target);
    ns.print('serverMoneyAvailable: ' + serverMoneyAvailable);
    ns.print('serverSecurityLevel: ' + serverSecurityLevel);
    ns.print('serverMinSecurityLevel: ', serverMinSecurityLevel);

    const weakenAnalyze = ns.weakenAnalyze(1);
    ns.print('weakenAnalyze: ' + weakenAnalyze);

    ns.print(`serverSecurityLevel - serverMinSecurityLevel: ${serverSecurityLevel - serverMinSecurityLevel}`);
    ns.print('serverSecurityLevel - serverMinSecurityLevel >= weakenAnalyze: ' + (serverSecurityLevel - serverMinSecurityLevel >= weakenAnalyze));

    if (serverSecurityLevel - serverMinSecurityLevel >= weakenAnalyze) {
      ns.print('start weaken at: ' + new Date().toISOString())
      await ns.weaken(target);
      continue;
    }

    if (serverMoneyAvailable < moneyThresh) {
      // If the server's money is less than our threshold, grow it
      await ns.grow(target);
    } else {
      // Otherwise, hack it
      await ns.hack(target, { threads: hackThreads });
    }
  }
}
