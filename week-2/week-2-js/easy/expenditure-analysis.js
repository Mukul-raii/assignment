    /*
      Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
      and return a list of objects where each object is unique category-wise and has total price spent as its value.
      transactions is an array where each
      Transaction - an object like 
            {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
      }
      Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
    */

    function calculateTotalSpentByCategory(transactions) {
    
      let spentByCategory = [];

      for (i = 0; i < transactions.length; i++) {
        let categories = transactions[i].category;
        let prices = transactions[i].price;

        let categoryExists=false
        for (j = 0; j < spentByCategory.length; j++) {
          if (spentByCategory[j].category === categories) {
            spentByCategory[j].totalSpent += prices;
            categoryExists = true;
            break;
          }

          
        }
        if (!categoryExists) {
          spentByCategory.push({ category: categories, totalSpent: prices });
        }
        
      }
      
      
      return spentByCategory;
 
    }
  
    
 module.exports = calculateTotalSpentByCategory;