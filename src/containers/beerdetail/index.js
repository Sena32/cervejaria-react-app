import React, { Component } from 'react'
import Header from '../../components/header'
import Load from '../../components/load'
import Button from '../../components/button'
import Painel from '../../components/painel'
import logo from '../../logo-cervejaria.svg';
import HttpService from '../../utils/HttpService'
import Wrapper from '../../components/wrapper'
import { ItemImg, ItemDetail, ItemDescription } from '../../components/beeritem'




class BeerDetail extends Component {

    state = {
        beer: {},
        isLoad: true,
    }

    handleClickBack() {
        this.props.history.push('/')
    }

    async getUserData() {
        try {
            const data = await HttpService.get(`beers/${this.props.match.params.id}`)
            this.setState({ beer: data[0] })
            console.log(data[0])
        } catch (error) {
            console.error(error)
        } finally {
            this.setState({
                ...this.state,
                isLoad: false
            })

        }
    }

    componentDidMount() {
        this.getUserData()
    }

    render() {
        const { beer: { name, tagline, first_brewed, description, image_url}, isLoad } = this.state

        return (
            <>
                {this.state.isLoad ? (
                    <Load />
                ) : (
                        <>
                            <Header>
                                <div>
                                    <img src={logo} className="logo" />
                                </div>
                            </Header>
                            <Painel title={name}>
                            </Painel>

                            <Wrapper variant="wrapper-flex">

                                <ItemImg
                                    urlImg={image_url}
                                    nameImg={name}>
                                </ItemImg>

                                <ItemDetail 
                                    first_brewed={first_brewed}
                                    tagline={tagline}>
                                    <h2>Detalhes:</h2>
                                </ItemDetail>
                                <ItemDescription description={description} >
                                    <h2>Descrição:</h2>
                                </ItemDescription>
                                
                                <Wrapper variant="end">
                                    <Button variant="primary" size="large" onClick={() => this.handleClickBack()}>Voltar</Button>
                                </Wrapper>
                            </Wrapper>
                        </>
                    )}
            </>
        );
    }
}

export default BeerDetail