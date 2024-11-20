import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { CartContainer } from '../../pods/cart'
import { ListCatsPage } from '../../scenes/cats'
import { ListDogsPage } from '../../scenes/dogs'
import { RouteNotFound } from '../../common/routeNotFound'
import { CheckoutCartPage } from '../../scenes/checkoutCart'
import { CartProvider } from '../context/cartContext'

import { CheckoutPersonalDataPage } from '../../scenes/checkoutPersonalData'
import { CheckoutPaymentPage } from '../../scenes/checkoutPayment'
import { CheckoutProvider } from '../context/checkoutContext'
import { CheckoutRoutes } from '../../common-app/CheckoutRoutes'

export const RouterComponent: React.FC = () => {
    return (
        <>
            <main>
                <BrowserRouter>
                    <CartProvider>
                        <Routes>
                            <Route path='*' element={<RouteNotFound />} />
                            <Route path='/' element={<Navigate to={"/cats"} replace />} />
                            <Route path='/cats' element={<ListCatsPage />} />
                            <Route path='/dogs' element={<ListDogsPage />} />
                            <Route path='/checkout' element={<CheckoutRoutes />}>
                                <Route path='cart' element={<CheckoutCartPage />} />
                                <Route path='personal_data' element={<CheckoutPersonalDataPage />} />
                                <Route path='download' element={<CheckoutPaymentPage />} />
                            </Route>
                        </Routes>
                        <CartContainer />
                    </CartProvider>
                </BrowserRouter>
            </main>


        </>
    )
}

