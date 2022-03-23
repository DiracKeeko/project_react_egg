import styles from './index.css';
import { ErrorBoundary, MenuBar } from '@/components';
import { useLocation } from 'umi';

function BasicLayout(props) {
  const location = useLocation();
  const paths = ['/', '/order', '/user'];
  return (
    <div className={styles.normal}>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      ></MenuBar>
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  );
}

export default BasicLayout;
