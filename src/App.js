// feature 1
import React from 'react';
import Products from './Components/Products';
import data from './data.json';
import Filter from './Components/Filter';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:"",
    }
  }
  sortProducts=(e)=>{
    //  e.preventDefault();
    console.log(e.target.value);
     const sort=e.target.value;
     
     this.setState((state)=>({
       sort:sort,
       products:this.state.products.slice().sort((a,b)=>(
         sort==="lowest"?
         ((a.price>b.price)?1:-1):
         sort==="highest"?
         ((a.price<b.price)?1:-1):
         ((a._id>b._id)?1:-1)
       ))
     }))
  }
   filterProducts=(e)=>{
     e.preventDefault();
    //  console.log(e.target.value);
     if(e.target.value===""){
       this.setState({size:e.target.value,products:data.products});
     }
     else{
      this.setState({
        size:e.target.value,
        products:data.products.filter(product=>product.availableSizes.indexOf(e.target.value)>=0)
      })
     }
    }
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
             <Filter count={this.state.products.length}
             size={this.state.size}
             sort={this.state.sort}
             filterProducts={this.filterProducts}
             sortProducts={this.sortProducts}
             />
            <Products products={this.state.products}/>
          </div>
          <div className="sidebar">
            Cart Items
          </div>
          
        </div>
      </main>
      <footer>
        All right is reserved
      </footer>
    </div>
  );

}}

export default App;
