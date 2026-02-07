// PCB Detail Modal JavaScript

// Sample PCB Data - Replace with your actual PCB information
const pcbData = {
    'pcb-1': {
        name: 'IoT Sensor Board',
        subtitle: '4-Layer PCB for Environmental Monitoring',
        images: [
            'Images/pcb-placeholder-1.jpg',
            'Images/pcb-placeholder-2.jpg',
            'Images/pcb-placeholder-3.jpg'
        ],
        description: 'This is a comprehensive IoT sensor board designed for environmental monitoring applications. It features multiple sensor interfaces, low-power operation, and wireless connectivity. The board is optimized for battery-powered deployment in remote locations.',
        features: [
            'Ultra-low power consumption (<50µA in sleep mode)',
            'Multiple sensor interfaces (I2C, SPI, UART)',
            'Wireless connectivity (WiFi/BLE)',
            'On-board voltage regulation (3.3V and 5V)',
            'Temperature range: -40°C to +85°C',
            'Compact form factor: 50mm x 50mm'
        ],
        specifications: {
            'PCB Layers': '4-Layer',
            'Board Size': '50mm x 50mm',
            'MCU': 'ESP32-S3',
            'Power Supply': '3.3V - 5V DC',
            'Sensors': 'Temperature, Humidity, Pressure',
            'Connectivity': 'WiFi 802.11b/g/n, BLE 5.0',
            'Design Tool': 'KiCad 7.0',
            'Manufacturing': 'JLCPCB / PCBWay'
        },
        applications: [
            {
                title: 'Smart Agriculture',
                description: 'Monitor soil moisture, temperature, and environmental conditions in agricultural fields for precision farming.'
            },
            {
                title: 'Industrial IoT',
                description: 'Track environmental parameters in warehouses, factories, and industrial facilities for quality control.'
            },
            {
                title: 'Home Automation',
                description: 'Integrate with smart home systems to monitor and control indoor climate and air quality.'
            }
        ],
        files: [
            {
                name: 'Schematic PDF',
                description: 'Complete circuit schematic',
                icon: 'fa-file-pdf',
                link: '#'
            },
            {
                name: 'Gerber Files',
                description: 'Manufacturing files (ZIP)',
                icon: 'fa-file-zipper',
                link: '#'
            },
            {
                name: 'BOM (Bill of Materials)',
                description: 'Component list (Excel)',
                icon: 'fa-file-excel',
                link: '#'
            },
            {
                name: 'KiCad Project',
                description: 'Source design files',
                icon: 'fa-folder',
                link: '#'
            }
        ]
    },
    'pcb-2': {
        name: 'Power Management Module',
        subtitle: '2-Layer PCB for Battery Charging',
        images: [
            'Images/pcb-placeholder-2.jpg',
            'Images/pcb-placeholder-1.jpg'
        ],
        description: 'A versatile power management module featuring battery charging, voltage regulation, and power path management. Designed for portable electronics and battery-powered devices.',
        features: [
            'Li-Ion/Li-Po battery charging (1A max)',
            'USB-C Power Delivery support',
            'Multiple output voltages (3.3V, 5V)',
            'Over-current and over-voltage protection',
            'LED status indicators',
            'Compact 30mm x 40mm footprint'
        ],
        specifications: {
            'PCB Layers': '2-Layer',
            'Board Size': '30mm x 40mm',
            'Input Voltage': '5V USB-C',
            'Output Current': '1A per rail',
            'Battery Support': 'Single cell Li-Ion/Li-Po',
            'Charging IC': 'BQ25895',
            'Design Tool': 'Altium Designer',
            'Certifications': 'CE, FCC'
        },
        applications: [
            {
                title: 'Portable Devices',
                description: 'Power management for handheld electronics, portable sensors, and wearable devices.'
            },
            {
                title: 'DIY Projects',
                description: 'Easy-to-integrate power solution for maker projects and prototypes.'
            }
        ],
        files: [
            {
                name: 'Schematic PDF',
                description: 'Circuit design',
                icon: 'fa-file-pdf',
                link: '#'
            },
            {
                name: 'Gerber Files',
                description: 'Manufacturing package',
                icon: 'fa-file-zipper',
                link: '#'
            }
        ]
    },
    'pcb-3': {
        name: 'Motor Driver Board',
        subtitle: '4-Layer High-Current PCB',
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
});
