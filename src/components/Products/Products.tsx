import React from "react";

interface IProductsState {
    products: IProduct[];
    loading: boolean;
}

interface IProduct {
    name: string;
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

    render() {
        if(this.state.loading) {
            return (
                <div>Loading...</div>
            );
        }
        
        return (
            <ol>
                <h1>Movies</h1>
                {this.state.products.map(item => {
                    return (<li>{item.name}</li>);
                })}
            </ol>
        );
    }
}