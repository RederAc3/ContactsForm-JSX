var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return(
            <div className={'contactItem'}>
                <img className={'contactImage'} src={'img/id-card.svg'}/>
                <div className={'desc-item'}>
                    <p className={'contactLabel'}> {this.props.item.firstName + ' ' + this.props.item.lastName} </p>
                    <a className={'contactLabel'} href={'mailto:' + this.props.item.email}> {this.props.item.email} </a>
                </div>
                <div className={'icons'}>
                    <img src={'img/edit.png'} className={'edit'} title={'Edycja'} />
                    <img src={'img/trash.png'} className={'trash'} title={'Usuń'} />
                </div>
            </div>
        )
    },
});