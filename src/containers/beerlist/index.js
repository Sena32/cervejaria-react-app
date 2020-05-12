import React, { Component } from 'react'
import { Item, ItemPagination } from '../../components/beeritem'
import HttpService from '../../utils/HttpService'
import Wrapper from '../../components/wrapper'
import Header from '../../components/header'
import Load from '../../components/load'
import { CardAction } from '../../components/cards'
import Button from '../../components/button'
import Painel from '../../components/painel'
import logo from '../../logo-cervejaria.svg'

import './beerList.css'

class BeerList extends Component {

    state = {
        beers: [],
        isLoad: true,
        qtdPage: 0,
        page: 1,
    }

    async getbeersList(page = 1) {

        try {
            const data = await HttpService.get(`beers?page=${page}&per_page=${4}`)
            const pages = data.length / 5;
            this.setState(
                {
                    beers: data,
                    qtdPage: pages,
                    page: page
                }
            )
        } catch (error) {
            console.error(error)
        } finally {
            this.setState(
                {
                    ...this.state,
                    isLoad: false,
                }
            )
        }

    }

    handleClickBack() {
        const { page } = this.state

        if (page === 1) return;
        const pageBack = page - 1;

        this.getbeersList(pageBack)
    }

    handleClickProx() {
        const { page, qtdPage } = this.state

        // Verifica se está na ultima page, se tiver da um return para não fazer nada
        //if(page===qtdPage)return;
        const pageProx = page + 1;

        this.getbeersList(pageProx)
    }

    handleClickDetail(id) {
        this.props.history.push(`/beers/${id}`)
    }

    componentDidMount() {
        this.getbeersList()
    }

    render() {

        return (
            <>
                {
                    this.state.isLoad ? (
                        <Load />
                    ) : (
                            <>

                                <Header>
                                    <div>
                                        <img src={logo} className="logo" />
                                    </div>
                                </Header>
                                <Painel />

                                <Wrapper>
                                    <div className="container">
                                        {this.state.beers.map(({ name, tagline, first_brewed, description, image_url, id }) => (
                                            <div key={id}>
                                                <Item
                                                    name={name}
                                                    email={tagline}
                                                    urlImg={image_url}
                                                    nameImg={name}
                                                >
                                                    <CardAction variant="card--actions-overlay">
                                                        <Button size="large" variant="primary" onClick={() => this.handleClickDetail(id)}> Detalhes</Button>
                                                    </CardAction>
                                                </Item>
                                            </div>
                                        ))}


                                    </div>
                                    <ItemPagination>

                                        <Button variant="paginate" disabled={this.state.page === 1} size="small" onClick={() => this.handleClickBack()}>Anterior</Button>
                                        <Button variant="paginate" size="small" onClick={() => this.handleClickProx()}>Próxima</Button>

                                    </ItemPagination>
                                </Wrapper>


                            </>
                        )
                }
            </>
        )

    }
}

export default BeerList
