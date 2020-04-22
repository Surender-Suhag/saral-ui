import React, { Component } from "react";
import { connect } from "react-redux";
import { getKeywords } from "../../actions";
import { GET_KEYWORDS } from "../../actions/types";
import { Loading } from "../common/Loading";
import { Error } from "../common/Error";
import Table from "react-bootstrap/Table";

class Keywords extends Component {
  componentDidMount() {
    this.props.getKeywords();
  }

  loading = () => <div> Keywords are loading</div>;

  error = () => <div className="text-danger"> Error : {this.props.error} </div>;

  tableHeader = () => (
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
  );

  renderKeyword = (kw, index) => (
    <tr key={kw.id}>
      <td>{index}</td>
      <td>{kw.name}</td>
      <td>{kw.description}</td>
    </tr>
  );

  KwList = () => (
    <Table
      className="container text-info"
      striped
      bordered
      hover
      variant="dark"
      size="md"
    >
      {this.tableHeader()}
      <tbody>{this.props.Keywords.map(this.renderKeyword)}</tbody>
    </Table>
  );

  render = () =>
    this.props.loading ? (
      <Loading />
    ) : this.props.error ? (
      <Error message={this.props.error} />
    ) : (
      this.KwList()
    );
}
const mapStateToProps = (state) => ({
  isFetching: state.loading[GET_KEYWORDS],
  error: state.error[GET_KEYWORDS],
  Keywords: state.automationkeywords,
});
export default connect(mapStateToProps, { getKeywords })(Keywords);
