import React from "react";

interface IProductsState {
    products: IProduct[];
    loading: boolean;
}

interface IProduct {
    id: number
    price: number
    year: number
    // name: string;
    imageUrl: string;
}

export default class Products extends React.Component<{}, IProductsState> {
    constructor(props: any) {
        super(props);

        this.state = {
            products: [],
            loading: true
        };
    }

    async componentDidMount() {
        let r = await fetch('http://medieinstitutet-wie-products.azurewebsites.net/api/products');
        let data: IProduct[] = await r.json();

        this.setState({
            products: data,
            loading: false
        });
    }

    handleClick(productClicked: IProduct) {
        console.log('Du klickade på ')

        this.saveProduct(productClicked)
    }

    saveProduct(product: IProduct) {
        console.log(product)
    }

    render() {
        if(this.state.loading) {
            return (
                <div style={{ textAlign: "center" }}>Loading...</div>
            );
        }
        
        return (
            <div className="movies">
                <ul>
                    {this.state.products.map((item: IProduct) => {
                        return (
                            <li key={item.id} onClick={this.handleClick.bind(this, item)}>
                                {/* {item.name}<br/> */}
            
                                <div>
                                    <a href={item.imageUrl} target="_blank" rel="noopener noreferrer">
                                    <img src={item.imageUrl} alt="" style={{width: "100px", height: "100px", borderRadius: '5px'}} />
                                    </a>
                                </div>

                                <div>
                                    Price: {item.price}$
                                    <br/>
                                    Release: {item.year}
                                    <br/>
                                    <button type="button">Add to cart</button>
                                    <hr/>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}