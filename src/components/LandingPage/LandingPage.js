import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Widget } from "near-social-vm";
import { GuardianSrc } from "../../data/widgets";
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';

const LandingPage = () => {
  useEffect(() => {
    // Add scroll event listener for animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section vh-100 d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold mb-4">Guardian Protocol</h1>
                <p className="lead mb-4">
                  The next generation of Liquid Staking on Vara Network. Stake your VARA tokens while maintaining full liquidity.
                </p>
              </motion.div>
              <a 
                href="#try-guardian" 
                className="hero-button"
                style={{ display: 'inline-block', textDecoration: 'none' }}
              >
                Stake Now
              </a>
            </Col>
            <Col lg={6} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="/Guardian.png"
                  alt="Guardian Protocol Logo"
                  className="img-fluid hero-logo"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Components Section */}
      <section id="try-guardian" className="try-guardian-section py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Try Guardian Protocol</h2>
          <div className="d-flex justify-content-center">
            <Widget src={GuardianSrc} props={{}} />
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Key Features</h2>
          <Row className="g-4">
            <Col md={4} className="animate-on-scroll">
              <div className="feature-card p-4 text-center">
                <div className="feature-icon mb-4">
                  <i className="fas fa-lock fa-3x"></i>
                </div>
                <h3>Secure Staking</h3>
                <p>Stake your VARA tokens securely with our battle-tested smart contracts</p>
              </div>
            </Col>
            <Col md={4} className="animate-on-scroll">
              <div className="feature-card p-4 text-center">
                <div className="feature-icon mb-4">
                  <i className="fas fa-exchange-alt fa-3x"></i>
                </div>
                <h3>Liquid Tokens</h3>
                <p>Receive gVARA tokens that maintain your liquidity while staking</p>
              </div>
            </Col>
            <Col md={4} className="animate-on-scroll">
              <div className="feature-card p-4 text-center">
                <div className="feature-icon mb-4">
                  <i className="fas fa-chart-line fa-3x"></i>
                </div>
                <h3>Earn Rewards</h3>
                <p>Earn staking rewards while maintaining full control of your assets</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gateway Section */}
      <section id="gateway-section" className="gateway-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-center mb-5 fw-bold">Guardian Gateway</h2>
          </motion.div>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="lead mb-4">
                  Guardian Gateway is a decentralized platform based on the <a href="https://eternacode.dev/" target="_blank" rel="noopener noreferrer" className="eternacode-link">Eternacode</a> project, 
                  designed to generate and display 100% decentralized interfaces thanks to code storage 
                  on Blockchain.
                </p>
              </motion.div>
              <Row className="g-4 mt-4">
                <Col md={4} className="d-flex">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="gateway-card p-4 text-center h-100 w-100"
                  >
                    <div className="gateway-icon mb-4">
                      <i className="fas fa-code fa-3x"></i>
                    </div>
                    <h3>Decentralized Development</h3>
                    <p>All code is stored on the blockchain, ensuring transparency and security</p>
                    <div className="mt-auto">
                      <span className="badge bg-warning text-dark">Blockchain</span>
                    </div>
                  </motion.div>
                </Col>
                <Col md={4} className="d-flex">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="gateway-card p-4 text-center h-100 w-100"
                  >
                    <div className="gateway-icon mb-4">
                      <i className="fas fa-paint-brush fa-3x"></i>
                    </div>
                    <h3>Custom Interfaces</h3>
                    <p>Create and customize interfaces for your decentralized applications</p>
                    <div className="mt-auto">
                      <span className="badge bg-warning text-dark">UI/UX</span>
                    </div>
                  </motion.div>
                </Col>
                <Col md={4} className="d-flex">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="gateway-card p-4 text-center h-100 w-100"
                  >
                    <div className="gateway-icon mb-4">
                      <i className="fas fa-shield-alt fa-3x"></i>
                    </div>
                    <h3>Guaranteed Security</h3>
                    <p>Benefit from the inherent security of blockchain technology</p>
                    <div className="mt-auto">
                      <span className="badge bg-warning text-dark">Security</span>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage; 