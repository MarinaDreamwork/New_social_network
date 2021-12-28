import * as axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "./Preloader";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
      this.props.toggleIsLoading(true);
      axios
      .get(`https://jsonplaceholder.typicode.com/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data);
        this.props.toggleIsLoading(false);
        
      });
    }

    onPageChange = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
    }

    render = () => {

      return <>  
          <Preloader isLoading={this.props.isLoading}/>
          <Users    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                   />
            </>

    }  
};

export default UsersAPIComponent;