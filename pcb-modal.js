// PCB Detail Modal JavaScript

const pcbData = {
    'pcb-1': {
        name: 'Vehicle Control Unit',
        subtitle: '4-Layer PCB for Electric Vehicle',
        githubLink: '',
        images: [
            'Images/P1-VCU-Real-Image.png',
            'Images/P1-VCU-Board-Assembly.png',
            'Images/P1-VCU-Board.png',
            'Images/P1-VCU-Back.png',
            'Images/P1-VCU-3D-View.png',
            'Images/P1-VCU-PCB-Design.png',
            'Images/P1-VCU-Schemetic.png',
            'Images/P1-VCU-Schemetic-Details.png'
        ],
        description: 'The Vehicle Control Unit (VCU) serves as the central brain of the EV. It seamlessly coordinates the motor controller, BMS, and charger while managing auxiliary systems like lights and indicators. Designed for reliability, it ensures your vehicle operates safely and efficiently in all conditions.',
        features: [
            'Comprehensive Vehicle Control Logic',
            'Integrated Fall & Movement Detection',
            'On-board Backup Battery for Security',
            'Multiple Sensor Interfaces (I2C, SPI, UART)',
            'Robust CAN Communication',
            'USB Interface for Diagnostics',
            'MOSFET Drivers for Auxiliary Control',
            'Wide Operating Temperature: -40°C to +85°C',
        ],
        specifications: {
            'PCB Layers': '4-Layer',
            'Board Size': '50mm x 50mm',
            'MCU': 'STM32F4',
            'Power Supply': '12V DC',
            'Design Tool': 'KiCad 7.0',
        },
        applications: [
            {
                title: 'Electric Vehicle',
                description: 'Functions as the primary controller for electric vehicles, managing motor drive, battery state, safety interlocks, and auxiliary systems.'
            }
        ],
        files: [

        ]
    },
    'pcb-2': {
        name: 'Communication Board',
        subtitle: '4-Layer PCB with BLE,LTE/4G,GPS,GNSS,WiFi,NFC',
        githubLink: '', // Empty means not published, add GitHub repo URL when published
        images: [
            'Images/Comm_3D.png',
            'Images/Comm_Back.png',
            'Images/Comm_PCB.png'
        ],
        description: 'This module bridges the gap between your vehicle and the cloud. Equipped with LTE/4G, Wi-Fi, GPS, and BLE, it enables real-time telemetry, theft detection, and remote monitoring from anywhere in the world.',
        features: [
            'Dual-Mode Bluetooth (BLE 5.0 & 4.1)',
            'Global LTE/4G Conectivity',
            'High-Precision GPS/GNSS',
            'Wi-Fi 802.11 b/g/n',
            'NFC for Quick Pairing',
            'Automotive CAN 2.0 Interface',
            'Secure OTA Updates',
            'Ultra-Low Power Consumption',
            'Protocol Support: MQTT, UDP, TCP/IP, HTTP/S'
        ],
        specifications: {
            'MCU': 'ESP32-S3',
            'LTE Module': 'SIM7600E',
            'CPU': '240MHz Dual Core',
            'RAM': '512KB + 8MB PSRAM',
            'Flash': '16MB',
            'PCB Layers': '4-Layer',
            'Board Size': '30mm x 40mm',
            'Input Voltage': '3.6 to 5V',
            'Design Tool': 'KiCad & Altium Designer',
        },
        applications: [
            {
                title: 'Vehicle Telemetry & Tracking',
                description: 'Provides real-time location tracking and vehicle status monitoring via LTE, while allowing seamless mobile app connectivity through BLE.'
            },
            {
                title: 'Industrial IoT Gateway',
                description: 'Acts as a robust gateway for IoT devices, aggregating data via CAN bus and transmitting it to the cloud via LTE or Wi-Fi using MQTT/HTTP.'
            },
            {
                title: 'Portable Hotspot',
                description: 'Can function as a portable Wi-Fi hotspot, bridging 4G LTE connectivity to local devices.'
            }
        ],
        files: [
        ]
    },
    'pcb-3': {
        name: 'Dashboard Display Unit',
        subtitle: 'Intelligent Vehicle Interface',
        githubLink: '',
        images: [
            'Images/P1-Display-Front-Image.png',
            'Images/P1-Display-Real-Image.png',
            'Images/P1-Display-Front.png',
            'Images/P1-Display-V1-3D.png',
            'Images/P1-Display-PCB.png'
        ],
        description: 'Designed to drive high-resolution TFT displays, this unit functions as the primary driver interface. It communicates via CAN and SPI interfaces for seamless telemetry integration. The robust automotive-grade 4-layer PCB accepts a 12V input and features an on-board 12V-to-5V DC-DC buck converter and a 3.3V linear regulator. To ensure reliability in noisy automotive environments, it includes a Pi power filter for EMI suppression, along with TVS diodes and chokes for CAN common-mode noise filtering.',
        features: [
            'High-Resolution TFT Display Driver',
            'CAN & SPI Communication Interfaces',
            'Automotive-Grade 4-Layer PCB Design',
            '12V Input with Protection Circuitry',
            'On-Board 12V to 5V DC-DC Buck Converter',
            '3.3V Linear Regulator for Logic Power',
            'Pi Filter for EMI/RFI Suppression',
            'Common Mode Choke & TVS for CAN Protection',
            'High-Impact Resistant Design'
        ],
        specifications: {
            'Architecture': 'ARM Core',
            'Memory': '64kB Flash, 32kB RAM',
            'Input Voltage': '12V DC',
            'PCB Layers': '4-Layer Automotive',
            'Display Interface': 'SPI / TFT',
            'Communication': 'CAN 2.0B, SPI',
            'Power Protection': 'TVS, EMI Pi-Filter, Reverse Polarity',
            'Regulators': 'DC-DC Buck (5V), Linear (3.3V)'
        },
        applications: [
            {
                title: 'Electric Vehicle Instrument Cluster',
                description: 'Displays critical driving data like speed, battery SOC, and warnings with high reliability.'
            },
            {
                title: 'Automotive Heads-Up Display (HUD)',
                description: 'Projects navigation and telemetry data directly into the driver\'s line of sight.'
            },
            {
                title: 'Industrial HMI Panels',
                description: 'Robust display interface for monitoring and controlling industrial machinery.'
            }
        ],
        files: []
    },
    'pcb-4': {
        name: 'Charging Management System',
        subtitle: 'Smart EV Infrastructure Controller',
        githubLink: '',
        images: [
            'Images/Charging-Station-Install.png',
            'Images/CMS-Board-Install-Review.jpg',
            'Images/CMS-Assembly-Photo.png',
            'Images/CMS-Full-Board-3D.png',
            'Images/CMS-3D-Image.png',
            'Images/CMS-Board-PCB.png'

        ],
        description: 'A versatile Charging Management System tailored for EV infrastructure. It features robust connectivity options (4G/LTE, WiFi, Ethernet) with automatic failover, enabling real-time telemetry and remote charger control. Includes RFID/NFC authentication for secure user access and comprehensive protection circuitry.',
        features: [
            '4G LTE, WiFi, & Ethernet Connectivity',
            'Automatic Network Failover & Recovery',
            'RFID/NFC User Authentication',
            'Real-Time Charging Telemetry',
            'Remote Start/Stop Control',
            'Fan Control & Thermal Management',
            '3x CAN Bus Interfaces',
            'BLE 5.0 Connectivity',
            'Input Power Filter (Common/Diff Mode)'
        ],
        specifications: {
            'Connectivity': '4G/LTE, WiFi, Ethernet',
            'Memory': '16MB Flash, 8MB RAM',
            'Interfaces': '3x CAN, BLE 5.0, RS232, RFID',
            'Input Voltage': '12V - 30V DC',
            'Protection': 'ESD, Common Mode Chokes',
            'Application': '2-Wheeler & 4-Wheeler Chargers'
        },
        applications: [
            {
                title: 'EV Charging Stations',
                description: 'Manages authorization, charging sessions, and telemetry for public or private chargers.'
            },
            {
                title: 'Fleet Management',
                description: 'Enables remote monitoring and control of fleet charging infrastructure.'
            }
        ],
        files: []
    },
    'pcb-5': {
        name: 'Power Management System',
        subtitle: 'Uninterruptible Power Supply Unit',
        githubLink: '',
        images: [
            'Images/PMS-Board-Assembly-Front.png',
            'Images/PMS-Board-Assembly-Back.png',
        ],
        description: 'An advanced Power Management System delivering uninterrupted power. Converts 85V-220V AC to a stable 12V 4A DC output with zero-latency (<10µs) UPS switching via an onboard Li-ion battery backup. Ideal for critical systems requiring high availability.',
        features: [
            'Wide AC Input (85V - 220V)',
            'Stable 12V DC / 4A Output',
            'Zero-Latency (<10µs) UPS Switching',
            'Onboard Li-ion Battery Charging',
            'Advanced Power & Noise Filtering',
            'Safe Power Conversion',
            'Compact & Efficient Design'
        ],
        specifications: {
            'Input Voltage': '85V - 220V AC',
            'Output Voltage': '12V DC',
            'Max Current': '4A',
            'Backup': 'Onboard Li-ion Battery',
            'Switching Time': '< 10µs (Zero Latency)',
            'Protection': 'Overcurrent, Short Circuit'
        },
        applications: [
            {
                title: 'Critical Embedded Systems',
                description: 'Provides fail-safe power for systems that cannot tolerate outages.'
            },
            {
                title: 'Industrial Control Units',
                description: 'Ensures continuous operation of control logic in industrial environments.'
            }
        ],
        files: []
    },
    'pcb-6': {
        name: 'RS-232 to CAN Gateway',
        subtitle: 'Secure Authentication & Protocol Converter',
        githubLink: '',
        images: [
            'Images/RS232-to-CAN-Assembly.png',
            'Images/RS232-to-CAN-3D.png',
            'Images/RS232-to-CAN-PCB.png'
        ],
        description: 'A dedicated bridge module designed for secure authentication and protocol conversion. It interfaces RF/NRF card readers via dual circuits and converts data to RS-232 or CAN 2.0B. Built with automotive-grade components, it ensures reliable operation in charging stations and access control systems.',
        features: [
            'Dual-Channel CAN 2.0B Interface',
            'RS-232 Serial Communication',
            'Integrated RF & NRF Card Reader Support',
            'Automotive-Grade Components',
            'Dual Voltage Conversion (5V & 3.3V)',
            'Wide Input Voltage (12V Nominal)',
            'Robust EMI/EMC Filtering'
        ],
        specifications: {
            'Protocols': 'CAN 2.0B, RS-232',
            'Input Voltage': '12V DC',
            'Onboard Power': '5V & 3.3V Regulators',
            'Authentication': 'RF / NRF Card Dual Circuit',
            'Grade': 'Automotive',
            'Channels': '2x CAN, 1x RS-232'
        },
        applications: [
            {
                title: 'EV Charging Authentication',
                description: 'Handles secure user check-in/check-out via RF cards and communicates via CAN.'
            },
            {
                title: 'Industrial Access Control',
                description: 'Secure gateway for industrial machinery and restricted area access.'
            }
        ],
        files: []
    },
    'pcb-7': {
        name: '4-Channel CAN Multiplexer',
        subtitle: 'High-Performance Isolated CAN Hub',
        githubLink: '',
        images: [
            'Images/3-to-1-CAN-Assembly.png',
            'Images/3-to-1-CAN-3D.png',
            'Images/3-to-1-CAN-PCB.png'
        ],
        description: 'A high-speed centralized hub designed to aggregate multiple isolated CAN buses (such as GBT or CCS2.0 PLC) into a single master bus. Powered by a 480MHz RISC-V processor, it handles high traffic loads, performs real-time error analysis, and provides safe data isolation for critical systems like PMS.',
        features: [
            '4x Isolated CAN Interfaces',
            '1x Master CAN Bus Output',
            '480MHz RISC-V Architecture',
            'Real-Time Error Monitoring & Analysis',
            'High Traffic Load Handling',
            'Automotive Grade Filtering',
            'Wide Input Voltage (12V - 30V)'
        ],
        specifications: {
            'Processor': 'RISC-V @ 480MHz',
            'Memory': '8MB RAM / 512kB Internal',
            'Input Voltage': '12V - 30V DC',
            'Interfaces': '4x Isolated CAN, 1x Master CAN',
            'PCB Layers': '4-Layer',
            'Isolation': 'Galvanic Isolation on 4 Channels'
        },
        applications: [
            {
                title: 'Fast Charging Stations',
                description: 'Merges data from BMS, Power Converters, GBT, and PLC/CCS modules into a central controller.'
            },
            {
                title: 'Complex Vehicle Networks',
                description: 'segments and monitors traffic between different vehicle domains.'
            }
        ],
        files: []
    }
};

// Current gallery state
let currentPCB = null;
let currentImageIndex = 0;

// Open PCB Detail Modal
function openPCBModal(pcbId) {
    const pcb = pcbData[pcbId];
    if (!pcb) return;

    currentPCB = pcb;
    currentImageIndex = 0;

    // Update modal content
    document.getElementById('pcbModalTitle').textContent = pcb.name;
    document.getElementById('pcbModalSubtitle').textContent = pcb.subtitle;

    // Update gallery
    updateGallery();

    // Update Overview tab
    document.getElementById('pcbDescription').textContent = pcb.description;

    const featuresList = document.getElementById('pcbFeatures');
    featuresList.innerHTML = '';
    pcb.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Update Specifications tab
    const specsGrid = document.getElementById('pcbSpecsGrid');
    specsGrid.innerHTML = '';
    Object.entries(pcb.specifications).forEach(([key, value]) => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `<strong>${key}</strong><span>${value}</span>`;
        specsGrid.appendChild(specItem);
    });

    // Update Applications tab
    const applicationsDiv = document.getElementById('pcbApplications');
    applicationsDiv.innerHTML = '';
    pcb.applications.forEach(app => {
        const appItem = document.createElement('div');
        appItem.className = 'application-item';
        appItem.innerHTML = `<h4>${app.title}</h4><p>${app.description}</p>`;
        applicationsDiv.appendChild(appItem);
    });

    // Update Files tab
    const filesDiv = document.getElementById('pcbFiles');
    filesDiv.innerHTML = '';
    pcb.files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <div class="file-info">
                <i class="fas ${file.icon} file-icon"></i>
                <div class="file-details">
                    <h4>${file.name}</h4>
                    <p>${file.description}</p>
                </div>
            </div>
            <a href="${file.link}" class="file-download" download>
                <i class="fas fa-download"></i> Download
            </a>
        `;
        filesDiv.appendChild(fileItem);
    });

    // Update request button
    document.getElementById('pcbRequestBtn').setAttribute('data-project', pcb.name);

    // Show modal
    document.getElementById('pcbDetailModal').style.display = 'flex';
}

// Update gallery images
function updateGallery() {
    if (!currentPCB) return;

    const images = currentPCB.images;

    // Update main image
    const mainImg = document.getElementById('pcbMainImage');
    mainImg.src = images[currentImageIndex];

    // Apply privacy blur to sensitive images
    // Apply privacy blur to sensitive images (All boards are blurred)
    if (Object.values(pcbData).includes(currentPCB)) {
        mainImg.classList.add('privacy-blur');
    } else {
        mainImg.classList.remove('privacy-blur');
    }

    // Update counter
    document.getElementById('currentImageIndex').textContent = currentImageIndex + 1;
    document.getElementById('totalImages').textContent = images.length;

    // Update thumbnails
    const thumbnailsDiv = document.getElementById('pcbThumbnails');
    thumbnailsDiv.innerHTML = '';

    images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.className = 'pcb-thumbnail' + (index === currentImageIndex ? ' active' : '');

        // Apply blur to thumbnails for all boards
        if (Object.values(pcbData).includes(currentPCB)) {
            thumb.classList.add('privacy-blur');
        }

        thumb.onclick = () => {
            currentImageIndex = index;
            updateGallery();
        };
        thumbnailsDiv.appendChild(thumb);
    });

    // Show/hide navigation buttons
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');

    if (images.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    }
}

// Gallery navigation
function navigateGallery(direction) {
    if (!currentPCB) return;

    const totalImages = currentPCB.images.length;

    if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    } else {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
    }

    updateGallery();
}

// Tab switching
function switchTab(tabName) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.pcb-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.pcb-tab-content').forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // PCB card click handlers
    document.querySelectorAll('.pcb-clickable').forEach(card => {
        card.addEventListener('click', function (e) {
            // Don't open modal if clicking on a link
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }

            const pcbId = this.getAttribute('data-pcb-id');
            openPCBModal(pcbId);
        });
    });

    // Close modal handlers
    document.querySelectorAll('.pcb-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function () {
            document.getElementById('pcbDetailModal').style.display = 'none';
        });
    });

    // Gallery navigation
    document.querySelector('.gallery-prev')?.addEventListener('click', () => navigateGallery('prev'));
    document.querySelector('.gallery-next')?.addEventListener('click', () => navigateGallery('next'));

    // Tab switching
    document.querySelectorAll('.pcb-tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Close modal when clicking outside
    document.getElementById('pcbDetailModal')?.addEventListener('click', function (e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        const modal = document.getElementById('pcbDetailModal');
        if (modal && modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
            } else if (e.key === 'ArrowLeft') {
                navigateGallery('prev');
            } else if (e.key === 'ArrowRight') {
                navigateGallery('next');
            }
        }
    });

    // GitHub button handlers
    document.querySelectorAll('.pcb-github-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const pcbId = this.getAttribute('data-pcb-id');
            const pcb = pcbData[pcbId];

            if (!pcb) return;

            // Check if GitHub link is available
            if (pcb.githubLink && pcb.githubLink.trim() !== '') {
                // Open GitHub link in new tab
                window.open(pcb.githubLink, '_blank');
            } else {
                // Show request form
                const modal = document.getElementById('requestModal');
                const subject = document.getElementById('modalSubject');
                subject.value = `Request Design Files for ${pcb.name}`;
                modal.style.display = 'flex';

                // Update button text to show "Request Design"
                this.querySelector('.btn-text').textContent = 'Request Design';
            }
        });
    });

    // Board Details button handlers
    document.querySelectorAll('.pcb-details-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const pcbId = this.getAttribute('data-pcb-id');
            openPCBModal(pcbId);
        });
    });

    // Update button text on page load based on githubLink availability
    document.querySelectorAll('.pcb-github-btn').forEach(btn => {
        const pcbId = btn.getAttribute('data-pcb-id');
        const pcb = pcbData[pcbId];

        if (pcb && (!pcb.githubLink || pcb.githubLink.trim() === '')) {
            btn.querySelector('.btn-text').textContent = 'Request Design';
            btn.querySelector('i').className = 'fas fa-envelope';
        }
    });
});
