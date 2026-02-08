// PCB Detail Modal JavaScript

const pcbData = {
    'pcb-1': {
        name: 'Vehicle Control Unit',
        subtitle: '4-Layer PCB for Electric Vehicle',
        githubLink: '',
        images: [
            'Images/P1-VCU-Board.png',
            'Images/P1-VCU-Back.png',
            'Images/P1-VCU-3D-View.png',
            'Images/P1-VCU-PCB-Design.png',
            'Images/P1-VCU-Schemetic.png',
            'Images/P1-VCU-Schemetic-Details.png'
        ],
        description: 'This is the Vehicle Control Unit (VCU) for the Electric Vehicle. It is a 4-layer PCB designed for motor control applications. It features multiple sensor interfaces, low-power operation, and wireless connectivity. The board is optimized for battery-powered deployment in remote locations.',
        features: [
            'Vehicle Control',
            'On Board Fall & Movement Detection',
            'On Board Back-up Battery Support',
            'Multiple sensor interfaces (I2C, SPI, UART)',
            'CAN Communication',
            'USB Interface',
            'Mosfet Driver for the Auxiliary Control',
            'On-board voltage regulation (3.3V and 5V)',
            'Temperature range: -40°C to +85°C',
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
                description: 'Vehicle Control Unit (VCU) for the Electric Vehicle. It is a 4-layer PCB designed for motor control applications. It features multiple sensor interfaces, low-power operation, and wireless connectivity. The board is optimized for battery-powered deployment in remote locations.'
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
        description: 'A versatile communication module featuring BLE,LTE/4G,GPS,GNSS,WiFi,NFC. Designed for portable electronics and battery-powered devices.',
        features: [
            'BLE 5.0 & 4.1',
            'LTE/4G',
            'GPS,GNSS',
            'WiFi',
            'NFC',
            'CAN B2.0',
            'OTA Update',
            'Low Power Consumption',
            'Protocol: HTTP, HTTPS,WebSocket, MQTT, TCPIP, UDP, FTP, SMTP, POP3, IMAP'
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
                title: 'Vehicle Connectivity and Tracking',
                description: 'Connectivity and tracking system for vehicles. Provide the on-board connectivity for vehicle tracking and monitoring. BLE used for the provide the connectivity with mobile app and Vehilce.'
            },
            {
                title: 'IOT Devices',
                description: 'CAN 2.0 used to communicate with other IOT devices and this board provide the remote connectivity using LTE/4G or Wifi and also supprot the on board HTTP, HTTPS,WebSocket, MQTT, TCPIP, UDP'
            },
            {
                title: 'Protable Wifi Device',
                description: 'This board can be used as the protable Wifi device. It can be convert the LTE/4G to wifi.'
            }
        ],
        files: [
        ]
    },
    'pcb-3': {
        name: 'Display Driver Board ',
        subtitle: '4-Layer High-Current PCB',
        githubLink: '',
        images: [
            'Images/pcb-placeholder-3.jpg'
        ],
        description: 'High-performance motor driver board capable of controlling DC motors, stepper motors, and servo motors. Features robust protection circuits and heat dissipation design.',
        features: [
            'Dual H-bridge motor drivers',
            'Current sensing and feedback',
            'PWM speed control',
            'Thermal protection',
            'Reverse polarity protection',
            'Screw terminals for easy connection'
        ],
        specifications: {
            'PCB Layers': '4-Layer',
            'Board Size': '80mm x 60mm',
            'Motor Voltage': '6V - 24V',
            'Max Current': '5A per channel',
            'Driver IC': 'DRV8871',
            'Control Interface': 'PWM, I2C',
            'Design Tool': 'Eagle CAD',
            'Copper Weight': '2oz'
        },
        applications: [
            {
                title: 'Robotics',
                description: 'Drive motors for robotic platforms, autonomous vehicles, and mechatronic systems.'
            },
            {
                title: 'CNC Machines',
                description: 'Control stepper motors in 3D printers, laser cutters, and CNC routers.'
            },
            {
                title: 'Industrial Automation',
                description: 'Motor control in conveyor systems, actuators, and automated machinery.'
            }
        ],
        files: [
            {
                name: 'Schematic PDF',
                description: 'Complete design',
                icon: 'fa-file-pdf',
                link: '#'
            },
            {
                name: 'Gerber Files',
                description: 'Production files',
                icon: 'fa-file-zipper',
                link: '#'
            },
            {
                name: 'Assembly Guide',
                description: 'Step-by-step assembly',
                icon: 'fa-file-word',
                link: '#'
            }
        ]
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
    document.getElementById('pcbMainImage').src = images[currentImageIndex];

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
