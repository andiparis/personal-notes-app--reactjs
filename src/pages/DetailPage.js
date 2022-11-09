import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/api';
 
function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}
 
class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    }
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
      return { notes: data };
    });
  }
 
  render() {
    if (this.state.notes === null) {
      return <p>Notes is not found!</p>;
    }
 
    return (
      <section>
        <NoteDetail key={this.state.notes.id} {...this.state.notes} />        
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
}
 
export default DetailPageWrapper;