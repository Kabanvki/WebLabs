// 1
let admin;
let name;
name = "Джон";
admin = name;
alert(admin);
// 2
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
a = parseInt (a);
b = parseInt (b);
alert(a + b); // 12
//3
for (let i = 2; i <= 10; i += 2)
{
    alert(i);
}
//4
let i = 0;
while (i < 3) 
{
    alert(`number ${i}!`);
    i++;
}
//5
let number;
do {
number = prompt("Введите число, большее 100", "");
} while (number <= 100 && number !== null);
//6
function isPrime(num) 
    {
        if (num < 2) 
        {
         return false;
        }
        for (let i = 2; i < num; i++) 
        {
         if (num % i === 0) 
            {
                return false;
            }
        }
        return true;
    }
    
    function printPrimes(n) 
    {
        for (let i = 2; i <= n; i++) 
        {
            if (isPrime(i)) 
            {
                alert(i);
            }
        }
    }
    
    let n = 10;
    printPrimes(n);