import { Component } from "react";

class Fakest extends Component {
  constructor() {
    super();
    this.state = {
      api: [],
      Fdata:[],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({
          api: res,
        });
      });
  }


  shop = () => {
   var main =prompt("Please enter whats category you want")

    var data = this.state.api.filter((val,) => 
        val.category == main
    );
this.setState({
Fdata:data
});

  };

  render() {
    return (
      <>
        <button onClick={this.shop}>click me for category</button>

        {/* <h1>{this.state.data}</h1> */}

        {this.state.Fdata.length > 0 ? (
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Fdata.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td><img src={item["image"]} alt=""  width="100px"/></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products found for this category.</p>
        )}
       
      </>
    );
  }
}

export default Fakest;


























// import { Component } from "react";

// class Fakest extends Component {
//   constructor() {
//     super();
//     this.state = {
//       api: [], // Initialize as an array to store fetched products
//       filteredData: [], // Add a new state for the filtered data
//     };
//   }

//   componentDidMount() {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         this.setState({
//           api: res, // Store the fetched data in `api`
//         });
//       });
//   }

//   shop = () => {
//     const category = prompt("Please enter the category you want");
//     const data = this.state.api.filter((val) => val.category === category);
    
//     this.setState({
//       filteredData: data, // Update `filteredData` with the filtered results
//     });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.shop}>Click me for category</button>

//         <h1>Filtered Products:</h1>
//         {this.state.filteredData.length > 0 ? (
//           <table border="1" cellPadding="10" cellSpacing="0">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Category</th>
//                 <th>Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.filteredData.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.title}</td>
//                   <td>{item.category}</td>
//                   <td>${item.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No products found for this category.</p>
//         )}
//       </>
//     );
//   }
// }

// export default Fakest;

