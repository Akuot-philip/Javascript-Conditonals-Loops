class Mkulima {
  
    constructor() {
      this.farms = [];
      this.products = [];
      this.orders = [];
      this.addFarm= function(farmId,name,farmer,phone,address){
            this.farms.push({farmId,name,farmer,phone,address})
      }
      this.removeFarm=(id)=>{
         let targetFarm= this.farms.find(item=>item.farmId===id)
         let farmIndex=this.farms.indexOf(targetFarm)
         this.farms.splice(farmIndex,1)
      }
      this.updateFarm=function(oldId,newFarmId, newName, newFarmer, newPhone, newAddress){
              let targetFarm= this.farms.find(item=>item.farmId===oldId)
              targetFarm.farmId = newFarmId
              targetFarm.name=newName
              targetFarm.farmer=newFarmer
              targetFarm.phone=newPhone
              targetFarm.address=newAddress
      }
      this.getFarm=(id)=>{
          console.log(this.farms.find(object=>object.farmId===id))
      }
      this.addProduct= function(productId,name,price){
          this.farms.push({productId,name,price})
    }
    this.removeProduct=function(id){
       let productIndex= this.products.findIndex(item=>item.productId===id)
       this.farms.splice(productIndex,1)
    }
    this.updateProduct=function(oldId,newId, newName, newPrice){
            let product= this.products.find(item=>item.productId===oldId)
            product.farmId=newId
            product.name=newName
            product.farmer=newPrice
    }
    this.getProductb=(id)=>{
      console.log(this.products.find(product=>product.farmId===id))
     }
  
  
    this.printProducts=()=>{
      console.log(this.products)
     }
     this.calculateOrderCost=function(id,quantity){
      let product= this.products.find(item=>item.productId===id)
      console.log(`For ${quantity} of ${product.name}, the cost of your order is ${product.price*quantity}`)
      this.orders.push(product)
      this.order
  
     }
  }
  }
  
  let MkulimaPlatform= new Mkulima()
  MkulimaPlatform.addFarm("0110011","Tomatoe","Philip","0792345087","Lodwar")
  MkulimaPlatform.addFarm("845006","Arrow roo","Akuot","0722864325","Juba")
  
  
  MkulimaPlatform.updateFarm("100","120","Rice", "Akuot","0798818610","Nairobi")
  
  console.log(MkulimaPlatform.farms)
  
  MkulimaPlatform.getFarm("120")
  