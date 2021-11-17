import { useState, useEffect } from "react"
import * as React from 'react'
import './style.css'
import Button from '../Button/'
import Header from "../Header";

const Table = ({...props}) => {

    const headerColumns = [
        'Проект',
        'Компания',
        'Индустрия',
        'Стадия',
        'Статус',
        'Дата создания'
    ]

    const getStatusColor = word => {
        switch (word) {
            case('В работе'): return '#6F8CE9'
            case('Завершен'): return '#1DAB98'
            case('Отменен'): return '#202020'
            case('Приостановлен'): return '#CCCCDB'
            default: console.log('error')
        }
    }

    const tableInfo = [
        {
            project: 'Проект №1',
            company: 'АФК система',
            industry: 'Автомобильная промышленность',
            stage: 'Инвестидея',
            status: 'В работе',
            creationDate: '26 апр 2021',
            id: 1
        },
        {
            project: 'Проект №1',
            company: 'АФК система',
            industry: 'Автомобильная промышленность',
            stage: 'Инвестидея',
            status: 'Завершен',
            creationDate: '26 апр 2021',
            id: 2
        },
        {
            project: 'Проект №1',
            company: 'АФК система',
            industry: 'Автомобильная промышленность',
            stage: 'Инвестидея',
            status: 'Отменен',
            creationDate: '26 апр 2021',
            id: 3
        },
        {
            project: 'Проект №1',
            company: 'АФК система',
            industry: 'Автомобильная промышленность',
            stage: 'Инвестидея',
            status: 'Приостановлен',
            creationDate: '26 апр 2021',
            id: 4
        },
        {
            project: 'Проект №1',
            company: 'АФК система',
            industry: 'Автомобильная промышленность',
            stage: 'Инвестидея',
            status: 'В работе',
            creationDate: '26 апр 2021',
            id: 5
        },
    ]

    const getTableRows = arr => arr.map(item =>
            <tr key={item.id}>
                <td className='table-project'>{item.project}</td>
                <td className='table-company'>{item.company}</td>
                <td className='table-industry'>{item.industry}</td>
                <td className='table-stage'>{item.stage}</td>
                <td className='table-btn'>
                    <Button
                        backgroundColor={getStatusColor(item.status)}
                        btnText={item.status}/>
                </td>
                <td className='table-creationDate'>{item.creationDate}</td>
            </tr>
    )

    const tableRows = getTableRows(tableInfo)

    const getTableTop = arr  => arr?.map(item => <th key={item} className='table-top'>{item}</th>)
    const tableTop = <tr className='top-row'>{getTableTop(headerColumns)}</tr>

    return <div className='table-body'>
        <div style={{
            backgroundColor: '#0C2179'
        }}>
            <Header />
            <h1 className='title'>Инвестиционные проекты</h1>
            <div className='input-box'>
                <input
                    className='main-input'
                    placeholder='Поиск по проектам...'/>
                <button className='filter-btn'>
                    <span className='filter-btn__text'>Фильтр</span>
                </button>
            </div>
        </div>
        <table>
            <thead>
                {tableTop}
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    </div>
}

export default Table