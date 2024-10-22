"use client"
import {useState, ChangeEvent} from "react"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card";
  import { Label } from "@/components/ui/label";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";

export default function TipCalculator() {

    const [billAmount, setBillAmount] = useState<number | null>(null)
    const [tipPercentage, setTipPercentage] = useState<number | null >(null)
    const [tipAmount, setTipAmount] = useState<number>(0)
    const [totalAmount, setTotalAmount] = useState<number>(0)

    const handleBillAmountChange = (e:ChangeEvent<HTMLInputElement>): void => {
        setBillAmount(parseFloat(e.target.value))
    }
    const handleTipPercentageChange = (e:ChangeEvent<HTMLInputElement>): void => {
        setTipPercentage(parseFloat(e.target.value))
    }

    const calculateTip = ():void => {
        if(billAmount !== null && tipPercentage !== null){

        const tip = billAmount * (tipPercentage / 100)
        setTipAmount(tip)
        setTotalAmount(billAmount + tip)
        }

    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
  {/* Center the tip calculator card within the screen */}
  <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
    <CardHeader>
      {/* Header with title and description */}
      <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white transition-colors duration-500">
        Tip Calculator
      </CardTitle>
      <CardDescription className="text-gray-600 dark:text-gray-300">
        Enter the bill amount and tip percentage to calculate the tip and total.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {/* Input for bill amount */}
      <div className="grid gap-2">
        <Label htmlFor="bill-amount" className="text-gray-700 dark:text-gray-400">Bill Amount</Label>
        <Input
          id="bill-amount"
          type="number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter bill amount"
          value={billAmount !== null ? billAmount : ""}
          onChange={handleBillAmountChange}
        />
      </div>
      {/* Input for tip percentage */}
      <div className="grid gap-2">
        <Label htmlFor="tip-percentage" className="text-gray-700 dark:text-gray-400">Tip Percentage</Label>
        <Input
          id="tip-percentage"
          type="number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter tip percentage"
          value={tipPercentage !== null ? tipPercentage : ""}
          onChange={handleTipPercentageChange}
        />
      </div>
      {/* Button to calculate tip */}
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:focus:ring-blue-300" onClick={calculateTip}>
        Calculate
      </Button>
    </CardContent>
    <CardFooter className="grid gap-2">
      {/* Display the calculated tip amount */}
      <div className="flex items-center justify-between text-gray-800 dark:text-white">
        <span>Tip Amount:</span>
        <span className="font-bold">${tipAmount.toFixed(2)}</span>
      </div>
      {/* Display the calculated total amount */}
      <div className="flex items-center justify-between text-gray-800 dark:text-white">
        <span>Total Amount:</span>
        <span className="font-bold">${totalAmount.toFixed(2)}</span>
      </div>
    </CardFooter>
  </Card>
</div>
  )
}
