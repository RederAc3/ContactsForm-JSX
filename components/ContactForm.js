var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
      },

    render: function () {
        return (
            <form className={'contactForm'}>
                <table>
                    <tr>
                        <td><label className={'title-input'}>Imię</label></td>
                        <td><input type={'text'} value={this.props.contact.firstName} /></td>
                    </tr>
                    <tr>
                    <td><label className={'title-input'}>Nazwisko</label></td>
                        <td><input type={'text'} value={this.props.contact.lastName} /></td>
                    </tr>
                    <tr>
                    <td><label className={'title-input'}>Email</label></td>
                        <td><input type={'email'} value={this.props.contact.email} /></td>
                    </tr>
                </table>
            </form>
        )
    },
});