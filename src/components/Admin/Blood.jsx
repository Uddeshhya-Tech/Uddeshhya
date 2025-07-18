import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from './Card';
import { Badge } from './Badge';
import { Phone, Mail, Hospital, Calendar, Users, Clock ,ChevronDown } from 'lucide-react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-4 py-2 rounded-md font-medium transition-all duration-200";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-50"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
const Dropdown = ({ value, onChange, options }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white border-2 border-red-600 text-red-600 py-2 px-4 pr-8 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600 pointer-events-none" size={20} />
    </div>
  );
};

const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md m-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">×</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const BloodManagement = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const bloodGroupOptions = [
    { value: '', label: 'All Blood Groups' },
    { value: 'unknown', label: 'Don\'t Know' },
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' }
  ];
  const formatPhoneNumber = (phone) => {
    const cleaned = String(phone).replace(/\D/g, '');
    const valid = cleaned.slice(0, 10);
    if (valid.length < 10) return null;
    return valid.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return null;
    
    // First try to parse as ISO date string
    const isoDate = new Date(dateStr);
    if (!isNaN(isoDate)) {
      return isoDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }
    
    // If not ISO format, try the original formatting logic
    const months = {
      'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06',
      'Jul': '07', 'Aug': '08', 'Sept': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
    };
  
    dateStr = dateStr.trim().replace(/\s+/g, ' ');
  
    if (dateStr.includes('Blood Camp')) {
      dateStr = dateStr.replace('Blood Camp ', '');
    }
  
    const parts = dateStr.split(' ');
    let date;
    
    if (parts.length === 3) {
      const [day, month, year] = parts;
      const monthNum = months[month.substring(0, 3)];
      if (monthNum) {
        date = new Date(`${year}-${monthNum}-${day.padStart(2, '0')}`);
      }
    } else if (parts.length === 2) {
      const [day, month] = parts;
      const monthNum = months[month.substring(0, 3)];
      if (monthNum) {
        date = new Date(`2024-${monthNum}-${day.padStart(2, '0')}`);
      }
    }
  
    if (date && !isNaN(date)) {
      return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }
    
    return 'Invalid Date';
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await fetch('https://sheetdb.io/api/v1/15x9jk1ueghj7');
      const data = await response.json();
      
      const formattedData = data.map(donor => ({
        ...donor,
        'Phone Number': formatPhoneNumber(donor['Phone Number']),
        'Date of Blood Donation': formatDate(donor['Date of Blood Donation'])
      }));
      
      setDonors(formattedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching donors:', error);
      setLoading(false);
    }
  };

  const handleCallNow = async (donor) => {
    const timestamp = new Date().toISOString();
    
    // First initiate the phone call before making the API request
    if (donor['Phone Number ']) {
      const phoneNumber = donor['Phone Number '].replace(/\D/g, '');
      // Create and click a temporary link element to initiate the call
      const link = document.createElement('a');
      link.href = `tel:${phoneNumber}`;
      link.click();
    }
  
    // Then update the sheet
    try {
      await fetch(`https://sheetdb.io/api/v1/15x9jk1ueghj7/name/${encodeURIComponent(donor.name)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: { 
            'Last Call': timestamp,
            'Response': 'pending'
          }
        })
      });
      
      setDonors(prevDonors => 
        prevDonors.map(d => 
          d.name === donor.name 
            ? { ...d, 'Last Call': timestamp, 'Response': 'pending' }
            : d
        )
      );
    } catch (error) {
      console.error('Error updating call timestamp:', error);
    }
  };

  const updateStatus = async (status) => {
    if (!selectedDonor) return;

    try {
      const updateData = {
        'Response': status
      };

      await fetch(`https://sheetdb.io/api/v1/15x9jk1ueghj7/name/${encodeURIComponent(selectedDonor.name)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: updateData })
      });

      setDonors(prevDonors =>
        prevDonors.map(d =>
          d.name === selectedDonor.name ? { ...d, ...updateData } : d
        )
      );

      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const updateDonationDate = async (date) => {
    if (!selectedDonor) return;

    try {
      const updateData = {
        'Date of Blood Donation ': date,
        'Response': 'donated'
      };

      await fetch(`https://sheetdb.io/api/v1/15x9jk1ueghj7/name/${encodeURIComponent(selectedDonor.name)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: updateData })
      });
// Use the formatDate function to maintain consistency
const formattedDate = formatDate(date);
      setDonors(prevDonors =>
        prevDonors.map(d =>
          d.name === selectedDonor.name 
            ? { ...d, 'Date of Blood Donation ': formattedDate, 'Response': 'donated' }
            : d
        )
      );

      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error updating donation date:', error);
    }
  };

  const filteredDonors = donors.filter(donor => {
    if (!selectedBloodGroup) return true;
    if (selectedBloodGroup === 'unknown') {
      return !donor['Blood Group '] || donor['Blood Group '].trim() === '';
    }
    return donor['Blood Group ']?.trim() === selectedBloodGroup;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-red-600 mb-8 mt-16">Blood Donor Management</h1>
      
      {/* <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={!selectedBloodGroup ? 'primary' : 'outline'}
          onClick={() => setSelectedBloodGroup('')}
          className="w-20"
        >
          All
        </Button>
        {bloodGroups.map(group => (
          <Button
            key={group}
            variant={selectedBloodGroup === group ? 'primary' : 'outline'}
            onClick={() => setSelectedBloodGroup(group)}
            className="w-16"
          >
            {group}
          </Button>
        ))}
      </div> */}
       <div className="mb-8">
        <Dropdown
          value={selectedBloodGroup}
          onChange={setSelectedBloodGroup}
          options={bloodGroupOptions}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDonors.map((donor, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gray-50">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{donor.name}</h2>
                <Badge variant="secondary" className="bg-red-100 text-red-600">
                {donor['Blood Group '] || 'Unknown'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                <span>{donor['Phone Number '] || 'Invalid Phone Number'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <span>{donor['E-Mail'] || 'N/A'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Hospital size={16} />
                <span>{donor['Name of Hospital'] || 'N/A'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} />
                <span>{donor['Date of Blood Donation '] || 'No donation recorded'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users size={16} />
                <span>{donor['Batch/ Volunteer'] || 'N/A'}</span>
              </div>

              <div className="flex gap-2 mt-4">
                <Button 
                  onClick={() => handleCallNow(donor)}
                  className="flex-1"
                >
                  Call Now
                </Button>
                <Button 
                  variant="secondary"
                  className="flex-1"
                  onClick={() => {
                    setSelectedDonor(donor);
                    setIsDialogOpen(true);
                  }}
                >
                  Update Status
                </Button>
              </div>

              {donor['Last Call'] && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={14} />
                    <span>Last Called: {new Date(donor['Last Call']).toLocaleString()}</span>
                  </div>
                  {donor['Response'] && (
                    <div className="mt-1 text-sm text-gray-600">
                      Status: {donor['Response']}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Update Status"
      >
        <div className="space-y-4">
          <Button
            onClick={() => updateStatus('responded and agree')}
            className="w-full"
          >
            Responded and Agree
          </Button>
          <Button
            onClick={() => updateStatus('not responded')}
            variant="secondary"
            className="w-full"
          >
            Not Responded
          </Button>
          <Button
            onClick={() => updateStatus('responded and not agree')}
            variant="secondary"
            className="w-full"
          >
            Responded and Not Agree
          </Button>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Update Last Donation Date
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md"
              onChange={(e) => updateDonationDate(e.target.value)}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default BloodManagement;