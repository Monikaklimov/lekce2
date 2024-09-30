/*/Jeden lístek do divadla Pěst na oko stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného, přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem. Hodnotu proměnné prijem vypište do stránky. Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti? Vypište do stránky i příjem divadla se započítanou slevou pro studenty.*/

console.log("jmenuji se Monika")
const prijem = 12 * 174 * 15
console.log(prijem)
const slevaStudent = 0.65 * 12
const pocetStudentu = 0.4 * 174
const novyPrijem = slevaStudent * 15 * pocetStudentu
console.log(novyPrijem)