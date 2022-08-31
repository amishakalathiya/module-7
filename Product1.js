import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Header from './Header'



export default function Product1() {

    const [product, setProducts] = useState()
    const [foundProducts, setFoundProducts] = useState(product)

    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.value
        if (search) {
            const result = product.filter((item) => {
                return item.title.toLowerCase().includes(search.toLowerCase())
            })
            setFoundProducts(result)
        } else {
            console.log('ff')
            setFoundProducts(product)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = () => {
        fetch('http://localhost:3001/product')
            .then((Response) => Response.json())
            .then((json) => {
                setProducts(json)
                setFoundProducts(json)
            });
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/product/${id}`, {
            method: "DELETE",
        });

    }
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-12'>
                    <LinkContainer to="/addproduct">
                        <button className='btn btn-info mb-2'>Add</button>
                    </LinkContainer>
                    <form>
                        <input type="text" placeholder='search...' onChange={handleSearch}></input>
                    </form>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                foundProducts && foundProducts.map((p) =>
                                    <tr>
                                        <td>{p.id}</td>
                                        <td>{p.title}</td>
                                        <td>{p.price}</td>
                                        <td>{p.description}</td>
                                        <img src={window.location.origin + `/ClientAssest/images/${p.image}`} width="150px"></img>
                                        <td>
                                            <LinkContainer to={`/update/${p.id}`}>
                                                <button className='btn btn-primary' >Edit</button>
                                            </LinkContainer>

                                            <button className='btn btn-danger' onClick={() => handleDelete(p.id)}>Delete</button>

                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
