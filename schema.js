const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    created_at: String
  }

  type Employee {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    designation: String!
    salary: Float!
    date_of_joining: String!
    department: String!
    employee_photo: String
  }

  type Query {
    login(email: String!, password: String!): String
    getAllEmployees: [Employee]
    searchEmployeeById(eid: ID!): Employee
    searchEmployeeByDesignationOrDepartment(designation: String, department: String): [Employee]
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): User
    addEmployee(
      first_name: String!, last_name: String!, email: String!,
      gender: String!, designation: String!, salary: Float!,
      date_of_joining: String!, department: String!, employee_photo: String
    ): Employee
    updateEmployeeById(eid: ID!, first_name: String, last_name: String, email: String, designation: String, salary: Float, department: String): Employee
    deleteEmployeeById(eid: ID!): String
  }
`;

module.exports = typeDefs;
