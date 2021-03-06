/**
 * @jsx React.DOM
 */
var React = require('react');
var FormFor = require('../vendor/form-for/form-for.react');
var ArticleForm = React.createClass({
  render: function() {
    return (
      <FormFor object={this.props.object} options={this.props.options} errors={this.props.errors} />
    );
  }

});

module.exports = ArticleForm;
