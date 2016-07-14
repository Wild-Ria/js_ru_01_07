import React, { Component }  from 'react'
import Article from './Article/index'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from "react-day-picker"
import moment from 'moment'
import 'react-day-picker/lib/style.css'

class ArticleList extends Component {

    state = {
        selectedArticles: null,
        from: null,
        to: null,
    }

    constructor(props) {
      super(props);
      //можно и так, но как по мне - лучше просто описать их через () =>
      this.handleDayClick = this.handleDayClick.bind(this);
      this.handleResetClick = this.handleResetClick.bind(this);
    }
    handleDayClick(e, day) {
      const range = DateUtils.addDayToRange(day, this.state);
      this.setState(range);
    }
    handleResetClick(e) {
      e.preventDefault();
      this.setState({
        from: null,
        to: null,
      });
    }

    render() {
        const { articles, isItemOpen, toggleOpenItem } = this.props
        const { from, to } = this.state;
        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {isItemOpen(article.id)}
                openArticle = {toggleOpenItem(article.id)}
            />
        </li>)

        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>Article list</h1>
                <Select
                    options = {options}
                    multi = {true}
                    value = {this.state.selectedArticles}
                    onChange = {this.handleSelectChange}
                />
                {/*Не стоит писать подобную логику в JSX, лучше вынести в отдельную переменную*/}
                {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                {from && to &&
                <p>
                  You choose from {moment(from).format('L')} to {moment(to).format('L')}.
                  {' '}<a href="#" onClick={this.handleResetClick}>Reset</a>
                </p>
                }
                <DayPicker
                  ref="daypicker"
                  selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                  onDayClick={this.handleDayClick}
                />
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }

    handleSelectChange = (selectedArticles) => {
        console.log(selectedArticles)
        this.setState({
            selectedArticles
        })
    }

}

export default oneOpen(ArticleList)
