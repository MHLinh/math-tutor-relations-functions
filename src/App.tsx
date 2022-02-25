import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import { makeStyles, ThemeProvider } from "@mui/styles"
import {
  ScrollToTop,
  NavigationButtons,
} from "components"
import { 
  HomePage,
  RelationRepresentationPage,
  RelationPropertiesNavigationPage,
  RelationPropertiesPage,
  RelationReflexivePage,
  RelationIrreflexivePage,
  RelationSymmetricPage,
  RelationAntisymmetricPage,
  RelationTransitivePage,
  RelationWarshallsPage,
  FunctionPropertiesPage,
  VerticalLineTestPage
 } from "pages"
import { theme } from "theme"

function App() {

  return (
    <Router>
      {/* <ScrollToTop /> */}
      <ThemeProvider theme={theme}>
        <Box 
          sx={{
            paddingTop: 1,
            paddingLeft: 1,
            paddingRight: 1,
          }}
        >
          <NavigationButtons />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/relation-representation" element={<RelationRepresentationPage />} />
            <Route path="/relation-properties" element={<RelationPropertiesNavigationPage />} />
            <Route path="/relation-properties-all" element={<RelationPropertiesPage />} />
            <Route path="/relation-properties-reflexive" element={<RelationReflexivePage />} />
            <Route path="/relation-properties-irreflexive" element={<RelationIrreflexivePage />} />
            <Route path="/relation-properties-symmetric" element={<RelationSymmetricPage />} />
            <Route path="/relation-properties-antisymmetric" element={<RelationAntisymmetricPage />} />
            <Route path="/relation-properties-transitive" element={<RelationTransitivePage />} />
            <Route path="/relation-warshalls" element={<RelationWarshallsPage />} />
            <Route path="/function-properties" element={<FunctionPropertiesPage />} />
            <Route path="/function-vertical-line-test" element={<VerticalLineTestPage />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App
