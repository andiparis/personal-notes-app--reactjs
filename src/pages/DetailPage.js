import React from 'react';
import { useParams } from 'react-router-dom';
import NoteHeader from '../components/NoteHeader';
import NoteDetail from '../components/NoteDetail';
import { getNotes } from '../utils/index';
 
function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={Number(id)} />;
}
 
class DetailPage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      notes: getNotes().filter(note => note.id == props.id)
    };
  }
 
  render() {
    if (this.state.notes === null) {
      return <p>Notes is not found!</p>;
    }
 
    return (
      <>
        <NoteHeader />
        <section>
          {
            this.state.notes.map((note) => (
              <NoteDetail {...note} />
            ))
          }
        </section>
      </>
    );
  }
}
 
export default DetailPageWrapper;