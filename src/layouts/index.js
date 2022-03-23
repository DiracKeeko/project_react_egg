import styles from './index.css';
import ErrorBoundary from '@/components/ErrorBoundary';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
    </div>
  );
}

export default BasicLayout;
