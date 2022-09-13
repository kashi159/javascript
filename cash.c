int main(void)
{
     int count = 0;   //to count
    float change; //declare a float variable "change"
    do
    {
        change = get_float("Change owed: ");  //get change from user
    }
    while (change < 0);    //make sure change is not less than 0
    int cent = round(change * 100); //round off to the nearest whole number

    while (cent >= 25)
    {
        cent = cent - 25; // divide by 25 and give account of remainder
        count++;  //count number of times
    }
    while (cent >= 10)
    {
        cent = cent - 10; //divide by 10 and give account of remainder
        count++;       //count number of times
    }
    while (cent >= 5)
    {
        cent = cent - 5;    //divide by 5 and give account of remainder
        count++;  //count number of times
    }
    while (cent >= 1)
    {
        cent = cent - 1;  //divide by 1 and give account of remainder
        count++;     //count number of times
    }
    printf("%i\n", count);