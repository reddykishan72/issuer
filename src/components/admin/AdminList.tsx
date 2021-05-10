import { routes } from 'constants/routes';
import ApplicationInfoPage from 'pages/issuer/ApplicationInfoPage';
// import ApproveButton from 'pages/issuer/ApproveButton';
import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {useHistory, withRouter, RouteComponentProps} from 'react-router-dom'; 

interface IData {
    username: string,
    payload: any,
    applicationID: string
    approved?: any
}

interface IProps {
    children?: React.ReactNode,
    data: IData,
    refreshList?: Function
}

const AdminList: React.FC<IProps & RouteComponentProps> = (props): any => {
  const history = useHistory();
  const { applicationID, approved } = props.data;
  const { givenName="", familyName="" } = props.data.payload

  const viewApplication = () => {
    history.push({
      pathname: `${routes.ISSUER_VIEW_APPLICATION}`,
    }, {
      state: props.data,
    });
  }

  return (
  // <Card style={{margin: '10px 0'}}>
  //   <Card.Body>
  //     <Card.Title>
  //         Application ID: { applicationID } (<span style={{fontWeight:400}}>{givenName} {familyName}</span>)
  //     </Card.Title>
  //     <Button onClick={viewApplication}> View more </Button>
  //   </Card.Body>
  // </Card>
    <>
      <td>{applicationID}</td>
      <td>{givenName} {familyName}</td>
      <td><Button onClick={viewApplication}>View more</Button></td>
      {/* <td>
        {approved?<><span>Approved</span></>:<ApproveButton data={props.data} refreshList={props.refreshList}/>}
      </td> */}
    </>
  )
}

export default withRouter(AdminList);