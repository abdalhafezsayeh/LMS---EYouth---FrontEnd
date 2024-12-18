import React, { Suspense, useState } from "react";
import Layout from "../components/Layouts/LayoutLMS";
import { Box } from "@mui/material";
import List from "../components/Skeleton/List";
import Video from "../components/Skeleton/Video";
import Tabs from "../components/Skeleton/Tabs";

const SectionList = React.lazy(() => import("../components/List/SectionList"));
const VideoPlayer = React.lazy(() => import("../components/VideoPlayer/VideoPlayer"));
const TabsContent = React.lazy(() => import("../components/Tabs/Tabs"));

// Error Boundary Component to handle Suspense errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading content!</h2>;
    }
    return this.props.children;
  }
}

const CoursePage = () => {
  const [isVisibleSide, setIsVisibleSide] = useState(false);

  return (
    <Layout
      isVisibleSide={isVisibleSide}
      setIsVisibleSide={setIsVisibleSide}
      sidebar={
        <ErrorBoundary>
          <Suspense fallback={<Box sx={{height:"100%"}}><List /></Box>}>
            <SectionList
              isVisibleSide={isVisibleSide}
              setIsVisibleSide={setIsVisibleSide}
            />
          </Suspense>
        </ErrorBoundary>
      }
    >
      {/* Video Player */}
      <ErrorBoundary>
        <Suspense fallback={<Box sx={{height:"500px"}}><Video /></Box>}>
          <VideoPlayer
            isVisibleSide={isVisibleSide}
            setIsVisibleSide={setIsVisibleSide}
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<Box><Tabs /></Box>}>
          <TabsContent />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default CoursePage;
