import React, {useState, useEffect} from 'react';
import 'pages/issuer/Issuer.scss'
import firebase from 'utils/firebase/firebase';
import AdminList from 'components/admin/AdminList';
import { Table } from 'react-bootstrap';
  
const Issuer: React.FC = (): React.ReactElement => {
  const [pendingApproval, setPendingApproval] = useState<any>([]);
  const [approved, setApproved] = useState<any>([]);
    
  useEffect(() => {
    fetchData();
  }, [])

  const fetchDataHelper = async (table: string) => {
    try {
      const db = firebase.firestore();
      const fetch = await db.collection(table).get()
      const information = fetch.docs.map(doc => {return {...doc.data(), docID: doc.id}})
      return information
    } catch (error) {
      console.log(error);
      return []
    }
  };

  const fetchData = async () => {
    const pendingApprovalData = await fetchDataHelper('drivinglicense-waiting-approval');
    setPendingApproval(pendingApprovalData)
    const approvedData = await fetchDataHelper('drivinglicense-approved');
    setApproved(approvedData)
  };

  return (
      <div className='tutorial'>
        <div className='tutorial__step'>
          <h3><strong>Pending Approval</strong></h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th></th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {pendingApproval.length !== 0 ? pendingApproval.map((x:any, index: number) => <tr>
                <AdminList data={x} key={x.docID} refreshList={() => fetchData()}/>
              </tr>) : <tr><td colSpan={4} style={{textAlign:"center"}}>No Pending Approvals</td></tr> }
            </tbody>
          </Table>

          <h3><strong>Approved Applications</strong></h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th></th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {approved.length !== 0 ? approved.map((x:any, index: number) => <tr>
                <AdminList data={x} key={x.docID} />
              </tr>) : <tr><td colSpan={4} style={{textAlign:"center"}}>No Pending Applications</td></tr> }
            </tbody>
          </Table>
        </div>
      </div>
  )
}

export default Issuer;